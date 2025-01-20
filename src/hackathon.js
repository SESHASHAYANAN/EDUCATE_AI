import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Hackathon() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const allData = [
      "STUDIES",
      "PROJECT",
      "HACKATHON",
      "JOB",
      "LEARNING",
      "DEVELOPMENT",
      "COLLABORATION",
      "MEETING",
      "DESIGN",
    ];

    const results = allData.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    sidebar1: {
      position: "fixed",
      width: "200px",
      height: "100%",
      gap: "5px",
      fontFamily: "cursive",
      backgroundColor: "#333",
      display: "flex",
      flexDirection: "column",
      paddingTop: "15px",
      paddingBottom: "20px",
      color: "#f4f4f4",
      textAlign: "center",
      margin: 0,
      padding: 0,
      left: 0,
      top: 0,
    },
    Head: {
      fontSize: "20px",
      marginTop: "30px",
      fontFamily: "cursive",
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "5px",
      alignItems: "center",
    },
    sidebarBox: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "20px 10px",
      width: "70%",
      textAlign: "center",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      margin: 0,
    },
    content: {
      marginLeft: "20px",
      padding: "20px",
      fontFamily: "cursive",
    },
    searchSection: {
      marginLeft: "200px",
      padding: "20px",
      textAlign: "center",
    },
    searchInput: {
      padding: "10px",
      width: "300px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    searchResults: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    searchResultItem: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "15px",
      borderRadius: "5px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    tableCell: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      padding: "5px 10px",
      backgroundColor: "#e6f3ff",
      borderRadius: "5px",
      cursor: "pointer",
    },
    linkHover: {
      backgroundColor: "#d6e9ff",
    },
    lastCellLink: {
      backgroundColor: "transparent",
      color: "#007bff",
      fontSize: "20px",
      padding: 0,
      cursor: "pointer",
    },
    backButton: {
      position: "absolute",
      top: "20px",
      left: "220px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      padding: "8px 16px",
      backgroundColor: "#333",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.sidebar1}>
        <h1>educate</h1>
        {[
          "HOME",
          "SEARCH",
          "HACKATHON",
          "FORUM",
          "EDUCATION",
          "CONNECT",
          "JOBS",
          "PROFILE",
          "LOG OUT",
        ].map((item) => (
          <div
            key={item}
            style={styles.sidebarItem}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
          >
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      <div style={styles.searchSection}>
        <div style={styles.Head}>
          <h1>HACKATHON</h1>
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <div style={styles.searchResults}>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index} style={styles.searchResultItem}>
                {result}
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>

        <div style={styles.content}>
          <h1>Top hackathon themes</h1>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableCell}>Theme</th>
                <th style={styles.tableCell}>Hackathons</th>
                <th style={styles.tableCell}>Total prizes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>
                  <span
                    style={styles.link}
                    onClick={() => navigate("/famoushack")}
                  >
                    Famous Hackathons
                  </span>
                </td>
                <td style={styles.tableCell}>65</td>
                <td style={styles.tableCell}>$3,168,000</td>
                <td style={styles.tableCell}>
                  <span
                    style={styles.lastCellLink}
                    onClick={() => navigate("/famoushack")}
                  >
                    &rarr;
                  </span>
                </td>
              </tr>
              <tr>
                <td style={styles.tableCell}>
                  <span
                    style={styles.link}
                    onClick={() => navigate("/famoushack")}
                  >
                    AI hackathon
                  </span>
                </td>
                <td style={styles.tableCell}>35</td>
                <td style={styles.tableCell}>$596,000</td>
                <td style={styles.tableCell}>
                  <span
                    style={styles.lastCellLink}
                    onClick={() => navigate("/famoushack")}
                  >
                    &rarr;
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
