import { useState, useEffect, useCallback } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./FloatingMenu.module.css";

interface Section {
  id: string;
  title: string;
}

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const { theme } = useTheme();

  // Функция для получения секций
  const getSections = useCallback(() => {
    const sectionElements = document.querySelectorAll("section.section");
    const sectionsData: Section[] = [];

    sectionElements.forEach((section) => {
      const id = section.id;
      // Ищем заголовок внутри SectionTitle компонента
      const titleElement = section.querySelector(".section-title, h2, h3");
      let title = titleElement?.textContent || `Section ${id}`;

      // Очищаем текст от лишних пробелов и переносов
      title = title.replace(/\s+/g, " ").trim();

      if (id) {
        sectionsData.push({ id, title });
      }
    });

    return sectionsData;
  }, []);

  // Обновляем секции при открытии меню
  const updateSections = useCallback(() => {
    const sectionsData = getSections();
    setSections(sectionsData);
  }, [getSections]);

  // Отслеживаем прокрутку для показа/скрытия кнопки "Наверх"
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowTopButton(scrollTop > 300); // Показываем кнопку после прокрутки на 300px
    };

    window.addEventListener("scroll", handleScroll);

    // Вызываем сразу при монтировании, чтобы проверить начальную позицию
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Показываем кнопку меню после небольшой задержки
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Обновляем секции после первоначальной загрузки
      updateSections();
    }, 1000);

    return () => clearTimeout(timer);
  }, [updateSections]);

  // Обновляем секции при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        updateSections();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, updateSections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      // При открытии меню обновляем список секций
      updateSections();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Плавающая кнопка меню */}
      <button
        className={`${styles.menuButton} ${isVisible ? styles.visible : ""} ${
          theme === "dark" ? styles.dark : ""
        }`}
        onClick={handleMenuToggle}
        aria-label="Open navigation menu"
      >
        <span className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Меню навигации */}
      {isMenuOpen && (
        <div
          className={`${styles.menu} ${theme === "dark" ? styles.dark : ""}`}
        >
          <div className={styles.menuHeader}>
            <h3>Навигация</h3>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={styles.closeButton}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className={styles.nav}>
            {sections.length > 0 ? (
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={styles.navLink}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noSections}>Секции не найдены</p>
            )}
          </nav>
        </div>
      )}

      {/* Кнопка возврата наверх - всегда в DOM, но с классом show при прокрутке */}
      <button
        className={`${styles.topButton} ${showTopButton ? styles.show : ""} ${
          theme === "dark" ? styles.dark : ""
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Overlay для закрытия меню по клику вне его */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
}
