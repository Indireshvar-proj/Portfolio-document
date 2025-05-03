import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/IndireshvarV/events/public`)
      .then(response => {
        console.log(response.data);
        // You can process and display this data as per your needs
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
      });
  }, []);

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* Render the data you fetched here */}
      {data && <div>{/* Render your calendar or activity data */}</div>}
    </Row>
  );
}

export default Github;
