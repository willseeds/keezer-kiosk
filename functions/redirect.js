exports.handler = async (event) => {
    const path = encodeURIComponent(event.path);
  
    return {
      statusCode: 302,
      headers: {
        Location: `/404.html`,
      },
    };
  };