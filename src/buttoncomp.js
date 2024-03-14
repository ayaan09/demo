import React, { useState, useRef, useEffect } from 'react';
import './buttoncomp.css'

function ButtonComponent() {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  const handleClick = () => {
    // Make the fetch request to your Django server
    fetch('http://localhost:8000/myapp/myview/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const scrollToBottom = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Calculate OD Matrix</button>
      {data.length > 0 && (
        <div>
          <table className='fancy-table'>
            <thead className='head-row'>
              <tr>
              <th>   /</th>
                <th>Station 1</th>
                <th>Station 2</th>
                <th>Station 3</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}> 
                <th>Station {rowIndex+1}</th>
                  {row.map((cell, columnIndex) => (
                    <td key={columnIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div ref={tableRef} />
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;