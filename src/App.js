import React, { useState } from 'react';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState('');

  const readCSV = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/readCSVFile');
      if (response.ok) {
        console.log('CSV file read successfully');
        setStatus('CSV file read successfully');
      } else {
        console.error('Failed to read CSV file');
        setStatus('Failed to read CSV file');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error reading CSV file');
    }
  };

  const processEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/processEmployees');
      if (response.ok) {
        console.log('Processing started');
        setStatus('Processing started');
      } else {
        console.error('Failed to process employees');
        setStatus('Failed to process employees');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error processing employees');
    }
  };

  const printEmployeeDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/printEmployeeDetails');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      } else {
        console.error('Failed to fetch employee details');
        setStatus('Failed to fetch employee details');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error fetching employee details');
    }
  };

  return (
    <div>
      <button onClick={readCSV}>Read CSV</button>
      <button onClick={processEmployees}>Process Employees</button>
      <button onClick={printEmployeeDetails}>Print Employee Details</button>
      <p>Status: {status}</p>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name}: {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
