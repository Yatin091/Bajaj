const express = require('express');
const app = express();
app.use(express.json());

const fullName = 'john_doe';
const dob = '17091999';

app.post('/bfhl', (req, res) => {
  const inputData = req.body.data || [];

  let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [];
  let sum = 0;
  let concat_string = '';

  inputData.forEach(item => {
    const str = item.toString();
    if (!isNaN(str)) {
      const num = parseInt(str);
      if (num % 2 === 0) even_numbers.push(str);
      else odd_numbers.push(str);
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      concat_string += str;
    } else {
      special_characters.push(str);
    }
  });

  const reversed = concat_string.split('').reverse();
  let altCaps = '';
  reversed.forEach((char, i) => {
    altCaps += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  });

  res.status(200).json({
    is_success: true,
    user_id: `${fullName}_${dob}`,
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: altCaps
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
