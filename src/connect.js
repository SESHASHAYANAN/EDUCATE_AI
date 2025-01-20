import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SocialConnect = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("connect");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      name: "DEVIKA MENON",
      country: "USA",
      role: "Software Developer",
      position: "Data Science Engineer At Amazon",
      followed: false,
    },
    {
      id: 2,
      name: "PRANOV",
      country: "USA",
      role: "AI Engineer",
      position: "Developer At AMAZON",
      followed: false,
    },
    {
      id: 3,
      name: "VIMAL",
      country: "India",
      role: "Developer",
      position: "Developer At Amazon",
      followed: false,
    },
    {
      id: 4,
      name: "SURYARAMAN",
      country: "India",
      role: "System Architect",
      position: "Developer At Zoho",
      followed: false,
    },
    {
      id: 5,
      name: "JAGAVANTHA",
      country: "Germany",
      role: "AI Architect",
      position: "Developer At Apple",
      followed: false,
    },
    {
      id: 6,
      name: "ARSHAD",
      country: "India",
      role: "AI Architect",
      position: "Developer At Apple",
      followed: false,
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Chess Tournament",
      organizer: "Alex Smith",
      organizerImg: "/api/placeholder/50/50",
      description: "Weekly chess tournament for all skill levels",
      type: "Gaming",
      registered: 24,
      maxCapacity: 32,
    },
  ]);

  const hotels = [
    {
      id: 1,
      name: "Grand Plaza",
      image: "/api/placeholder/200/150",
      rating: 4.5,
      cuisine: "Multi-cuisine",
      price: "₹₹₹",
      friends: ["John", "Sarah", "Mike"],
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Royal Feast",
      image: "/api/placeholder/200/150",
      rating: 4.3,
      cuisine: "Continental",
      price: "₹₹",
      friends: ["Emma", "David"],
      address: "456 Park Ave",
    },
    {
      id: 3,
      name: "Spice Garden",
      image: "/api/placeholder/200/150",
      rating: 4.7,
      cuisine: "Indian",
      price: "₹₹₹",
      friends: ["Alex", "Maria"],
      address: "789 Spice St",
    },
  ];

  const accommodations = [
    {
      id: 1,
      name: "Student Commons",
      image: "/api/placeholder/200/150",
      location: "Near University",
      roomType: "Shared - 2 Person",
      cost: "$500/month",
      residents: ["Emma", "Lisa"],
      amenities: ["WiFi", "Gym", "Study Room"],
    },
    {
      id: 2,
      name: "Campus View",
      image: "/api/placeholder/200/150",
      location: "University District",
      roomType: "Single Room",
      cost: "$700/month",
      residents: ["John"],
      amenities: ["WiFi", "Parking", "Laundry"],
    },
    {
      id: 3,
      name: "Graduate Housing",
      image: "/api/placeholder/200/150",
      location: "Downtown",
      roomType: "Studio",
      cost: "$900/month",
      residents: ["Mike", "Sarah"],
      amenities: ["WiFi", "Gym", "Pool"],
    },
  ];

  const gameRooms = [
    {
      id: 1,
      game: "Call of Duty",
      icon: "🎮",
      activePlayers: 12,
      roomCode: "COD-123",
      status: "In Progress",
    },
    {
      id: 2,
      game: "PUBG",
      icon: "🎯",
      activePlayers: 8,
      roomCode: "PUBG-456",
      status: "Waiting",
    },
    {
      id: 3,
      game: "Fortnite",
      icon: "🎮",
      activePlayers: 15,
      roomCode: "FN-789",
      status: "In Progress",
    },
  ];

  const [turfBookings, setTurfBookings] = useState([
    {
      id: 1,
      name: "Green Field Arena",
      game: "Football",
      time: "6:00 PM - 7:00 PM",
      price: "₹800/hour",
      playersJoined: ["John", "Mike", "Sarah"],
      maxPlayers: 10,
      image: "/api/placeholder/200/150",
    },
    {
      id: 2,
      name: "Sports Hub",
      game: "Cricket",
      time: "5:00 PM - 6:00 PM",
      price: "₹1000/hour",
      playersJoined: ["Alex", "Emma", "David"],
      maxPlayers: 12,
      image: "/api/placeholder/200/150",
    },
    {
      id: 3,
      name: "Indoor Arena",
      game: "Basketball",
      time: "7:00 PM - 8:00 PM",
      price: "₹600/hour",
      playersJoined: ["Lisa", "Tom"],
      maxPlayers: 8,
      image: "/api/placeholder/200/150",
    },
    {
      id: 4,
      name: "City Sports Complex",
      game: "Volleyball",
      time: "4:00 PM - 5:00 PM",
      price: "₹700/hour",
      playersJoined: ["Mark", "Anna"],
      maxPlayers: 8,
      image: "/api/placeholder/200/150",
    },
    {
      id: 5,
      name: "Stadium Turf",
      game: "Football",
      time: "8:00 PM - 9:00 PM",
      price: "₹900/hour",
      playersJoined: ["Chris", "Paul", "Maria"],
      maxPlayers: 10,
      image: "/api/placeholder/200/150",
    },
    {
      id: 6,
      name: "Community Court",
      game: "Basketball",
      time: "6:30 PM - 7:30 PM",
      price: "₹500/hour",
      playersJoined: ["James", "Sophie"],
      maxPlayers: 8,
      image: "/api/placeholder/200/150",
    },
    {
      id: 7,
      name: "Plaza Sports",
      game: "Cricket",
      time: "5:30 PM - 6:30 PM",
      price: "₹1100/hour",
      playersJoined: ["Daniel", "Oliver"],
      maxPlayers: 12,
      image: "/api/placeholder/200/150",
    },
    {
      id: 8,
      name: "Beach Court",
      game: "Volleyball",
      time: "4:30 PM - 5:30 PM",
      price: "₹600/hour",
      playersJoined: ["Lucas", "Emily"],
      maxPlayers: 8,
      image: "/api/placeholder/200/150",
    },
    {
      id: 9,
      name: "Central Park Turf",
      game: "Football",
      time: "7:30 PM - 8:30 PM",
      price: "₹850/hour",
      playersJoined: ["Noah", "Lily"],
      maxPlayers: 10,
      image: "/api/placeholder/200/150",
    },
  ]);

  const handleSidebarClick = (item) => {
    switch (item) {
      case "HOME":
        navigate("/");
        break;
      case "SEARCH":
        navigate("/search");
        break;
      case "HACKATHON":
        navigate("/hackathon");
        break;
      case "FORUM":
        navigate("/forum");
        break;
      case "EDUCATION":
        navigate("/education");
        break;
      case "CONNECT":
        navigate("/connect");
        break;
      case "JOBS":
        navigate("/jobs");
        break;
      case "PROFILE":
        navigate("/profile");
        break;
      case "LOG OUT":
        navigate("/logout");
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const allData = flashcards.map((card) => card.name);
    const results = allData.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleFollow = (id) => {
    const updatedFlashcards = flashcards.map((card) =>
      card.id === id ? { ...card, followed: !card.followed } : card
    );
    setFlashcards(updatedFlashcards);
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sidebar1: {
      position: "fixed",
      width: "200px",
      height: "100%",
      fontFamily: "cursive",
      backgroundColor: "#333",
      display: "flex",
      flexDirection: "column",
      paddingTop: "15px",
      paddingBottom: "20px",
      color: "#f4f4f4",
      gap: "5px",
      textAlign: "center",
      margin: 0,
      padding: 0,
      left: 0,
      top: 0,
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
    nav: {
      display: "flex",
      gap: "15px",
      marginBottom: "30px",
      padding: "15px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    connectButton: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    hotelsButton: {
      backgroundColor: "#FF5722",
      color: "white",
    },
    accommodationButton: {
      backgroundColor: "#2196F3",
      color: "white",
    },
    gamesButton: {
      backgroundColor: "#9C27B0",
      color: "white",
    },
    gatheringButton: {
      backgroundColor: "#FF9800",
      color: "white",
    },
    turfButton: {
      backgroundColor: "#795548",
      color: "white",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "calc(33.33% - 20px)",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    cardGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
      marginLeft: "220px",
    },
    cardImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    friendsList: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
      margin: "10px 0",
    },
    friendChip: {
      backgroundColor: "#e0e0e0",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
    },
    addEventButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      borderRadius: "20px",
      margin: "20px 0",
    },
    Head: {
      fontSize: "20px",
      marginTop: "30px",
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
    flashcardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginLeft: "250px",
      marginTop: "30px",
    },
    flashcard: {
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "30%",
      padding: "15px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      textAlign: "center",
    },
    profilePic: {
      width: "50px",
      height: "50px",
      backgroundColor: "#aaa",
      borderRadius: "50%",
      margin: "0 auto 10px",
    },
    userInfo: {
      color: "#555",
    },
    followBtn: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    followBtnFollowed: {
      backgroundColor: "#28a745",
    },
    turfCard: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "calc(33.33% - 20px)",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    joinButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  const renderConnect = () => (
    <div>
      <div style={styles.searchSection}>
        <div style={styles.Head}>
          <h1>CONNECT</h1>
        </div>

        <input
          type="text"
          placeholder="Search Profile..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <div style={styles.searchResults}>
          {searchResults.length > 0
            ? searchResults.map((result, index) => (
                <div key={index} style={styles.searchResultItem}>
                  {result}
                </div>
              ))
            : searchTerm && <div>No results found</div>}
        </div>
      </div>

      <div style={styles.flashcardContainer}>
        {flashcards.map((card) => (
          <div key={card.id} style={styles.flashcard}>
            <div style={styles.profilePic}>
              <img
                src="/api/placeholder/50/50"
                alt="Profile"
                style={styles.profilePic}
              />
            </div>
            <div style={styles.userInfo}>
              <h3>{card.name}</h3>
              <p>Country: {card.country}</p>
              <p>{card.role}</p>
              <p>{card.position}</p>
              <button
                style={{
                  ...styles.followBtn,
                  ...(card.followed ? styles.followBtnFollowed : {}),
                }}
                onClick={() => handleFollow(card.id)}
              >
                {card.followed ? "Followed" : "Follow"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHotels = () => (
    <div style={styles.cardGrid}>
      {hotels.map((hotel) => (
        <div key={hotel.id} style={styles.card}>
          <img src={hotel.image} alt={hotel.name} style={styles.cardImage} />
          <h3>{hotel.name}</h3>
          <div>Rating: {hotel.rating} ⭐</div>
          <div>Price Range: {hotel.price}</div>
          <div>Cuisine: {hotel.cuisine}</div>
          <div>
            <h4>Friends Here:</h4>
            <div style={styles.friendsList}>
              {hotel.friends.map((friend) => (
                <span key={friend} style={styles.friendChip}>
                  {friend}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAccommodations = () => (
    <div style={styles.cardGrid}>
      {accommodations.map((acc) => (
        <div key={acc.id} style={styles.card}>
          <img src={acc.image} alt={acc.name} style={styles.cardImage} />
          <h3>{acc.name}</h3>
          <div>Location: {acc.location}</div>
          <div>Room Type: {acc.roomType}</div>
          <div>Cost: {acc.cost}</div>
          <div>
            <h4>Current Residents:</h4>
            <div style={styles.friendsList}>
              {acc.residents.map((resident) => (
                <span key={resident} style={styles.friendChip}>
                  {resident}
                </span>
              ))}
            </div>
          </div>
          <button style={{ ...styles.button, backgroundColor: "#2196F3" }}>
            Contact Residents
          </button>
        </div>
      ))}
    </div>
  );

  const renderGameLobby = () => (
    <div style={styles.cardGrid}>
      {gameRooms.map((room) => (
        <div key={room.id} style={styles.card}>
          <h3>
            {room.icon} {room.game}
          </h3>
          <div>Active Players: {room.activePlayers}</div>
          <div>Room Code: {room.roomCode}</div>
          <div>Status: {room.status}</div>
          <button style={{ ...styles.button, backgroundColor: "#9C27B0" }}>
            Join Room
          </button>
        </div>
      ))}
    </div>
  );

  const renderGathering = () => (
    <div>
      <button style={styles.addEventButton}>🎉 Add New Event</button>
      <div style={styles.cardGrid}>
        {events.map((event) => (
          <div key={event.id} style={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={event.organizerImg}
                alt={event.organizer}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <h3>{event.title}</h3>
                <div>Organized by: {event.organizer}</div>
              </div>
            </div>
            <p>{event.description}</p>
            <div>Event Type: {event.type}</div>
            <div>
              Registered: {event.registered}/{event.maxCapacity}
            </div>
            <button style={{ ...styles.button, backgroundColor: "#FF9800" }}>
              Register for Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTurf = () => (
    <div style={styles.cardGrid}>
      {turfBookings.map((turf) => (
        <div key={turf.id} style={styles.turfCard}>
          <img src={turf.image} alt={turf.name} style={styles.cardImage} />
          <h3>{turf.name}</h3>
          <div>Game: {turf.game}</div>
          <div>Time: {turf.time}</div>
          <div>Price: {turf.price}</div>
          <div>
            Players: {turf.playersJoined.length}/{turf.maxPlayers}
          </div>
          <div style={styles.friendsList}>
            {turf.playersJoined.map((player) => (
              <span key={player} style={styles.friendChip}>
                {player}
              </span>
            ))}
          </div>
          <button style={styles.joinButton}>Join Game</button>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.nav}>
        <button
          onClick={() => setActiveSection("connect")}
          style={{ ...styles.button, ...styles.connectButton }}
        >
          🤝 Connect
        </button>
        <button
          onClick={() => setActiveSection("hotels")}
          style={{ ...styles.button, ...styles.hotelsButton }}
        >
          🏨 Hotels
        </button>
        <button
          onClick={() => setActiveSection("accommodation")}
          style={{ ...styles.button, ...styles.accommodationButton }}
        >
          🏠 Accommodation
        </button>
        <button
          onClick={() => setActiveSection("games")}
          style={{ ...styles.button, ...styles.gamesButton }}
        >
          🎮 Game Lobby
        </button>
        <button
          onClick={() => setActiveSection("gathering")}
          style={{ ...styles.button, ...styles.gatheringButton }}
        >
          🎉 Gathering
        </button>
        <button
          onClick={() => setActiveSection("turf")}
          style={{ ...styles.button, ...styles.turfButton }}
        >
          ⚽ Turf
        </button>
      </div>

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
            onClick={() => handleSidebarClick(item)}
          >
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      {activeSection === "connect" && renderConnect()}
      {activeSection === "hotels" && renderHotels()}
      {activeSection === "accommodation" && renderAccommodations()}
      {activeSection === "games" && renderGameLobby()}
      {activeSection === "gathering" && renderGathering()}
      {activeSection === "turf" && renderTurf()}
    </div>
  );
};

export default SocialConnect;
