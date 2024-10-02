const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'blue',
    },
    profile: {
      backgroundColor: 'blue',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '300px',
      marginTop: '20px',
    },
    profileImage: {
      marginBottom: '15px',
    },
    image: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    info: {
      fontSize: '16px',
    },
    navigation: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
    },
    navLink: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 15px',
      borderRadius: '5px',
      textDecoration: 'none',
    },
  };
export default styles  