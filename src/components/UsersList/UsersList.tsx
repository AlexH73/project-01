import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./UsersList.module.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div
        className={`${styles.container} ${
          theme === "dark" ? styles.darkTheme : ""
        }`}
      >
        <div className={styles.card}>
          <h2 className={styles.title}>👥 Users List</h2>
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading users...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`${styles.container} ${
          theme === "dark" ? styles.darkTheme : ""
        }`}
      >
        <div className={styles.card}>
          <h2 className={styles.title}>👥 Users List</h2>
          <div className={styles.error}>
            <p>Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className={styles.retryButton}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.darkTheme : ""
      }`}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>👥 Users Gallery</h2>
        <p className={styles.subtitle}>Data from JSONPlaceholder API</p>

        <div className={styles.scrollContainer}>
          <div className={styles.usersRow}>
            {users.map((user) => (
              <div key={user.id} className={styles.userCard}>
                <div className={styles.userAvatar}>{user.name.charAt(0)}</div>

                <div className={styles.userHeader}>
                  <h3 className={styles.userName}>{user.name}</h3>
                  <span className={styles.username}>@{user.username}</span>
                </div>

                <div className={styles.userInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📧</span>
                    <a
                      href={`mailto:${user.email}`}
                      className={styles.infoValue}
                    >
                      {user.email}
                    </a>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    <a href={`tel:${user.phone}`} className={styles.infoValue}>
                      {user.phone}
                    </a>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🌐</span>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      {user.website}
                    </a>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🏢</span>
                    <span className={styles.infoValue}>
                      {user.company.name}
                    </span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📍</span>
                    <span className={styles.infoValue}>
                      {user.address.city}
                    </span>
                  </div>
                </div>

                <div className={styles.companyCatchphrase}>
                  "{user.company.catchPhrase}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
