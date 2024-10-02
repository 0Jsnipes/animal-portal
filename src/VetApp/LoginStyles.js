// src/VetApp/LoginStyles.js

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url('https://media-be.chewy.com/wp-content/uploads/2014/11/07120701/Puppys-First-Vet-Visit.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: 'black',
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontSize: '0.9rem',
  },
};

export default styles;
