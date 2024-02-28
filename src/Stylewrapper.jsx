

const StyleWrapper = ({ children }) => {
  const wrapperStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #dee2e6',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'
  };

  return <div style={wrapperStyle}>{children}</div>;
};

export default StyleWrapper;