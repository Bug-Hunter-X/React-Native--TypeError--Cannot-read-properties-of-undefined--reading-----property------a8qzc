// FixedComponent.js

import React, { useState, useEffect } from 'react';

const FixedComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {/* Safely access data properties */}
      <Text>Name: {data?.user?.name ?? 'N/A'}</Text> 
      <Text>Email: {data?.user?.email ?? 'N/A'}</Text>
    </View>
  );
};

export default FixedComponent;