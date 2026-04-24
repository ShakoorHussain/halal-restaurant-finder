export const sheetParser = (csvText) => {
  const rows = csvText.split('\n').filter(row => row.trim() !== '');
  if (rows.length === 0) return [];

  const headers = rows[0].split(',').map(header => header.trim().replace(/^"|"$/g, ''));
  const data = [];

  // 8 Different Delicious Food Images
  const foodImages = [
    "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"
  ];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    
    const obj = {};
    headers.forEach((header, index) => {
      let val = values[index] ? values[index].trim() : '';
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      if (header === 'lat' || header === 'lng') {
        obj[header] = parseFloat(val);
      } else {
        obj[header] = val;
      }
    });

    // Assign a unique image based on the row index
    obj.image = foodImages[i % foodImages.length];

    data.push(obj);
  }

  return data;
};