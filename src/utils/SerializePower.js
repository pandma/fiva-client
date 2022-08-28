const SerializePowers = (power) => {
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = [];
  let p5 = [];
  let p6 = [];

  if (power) {
    const powersArray = power.split(" ");
    powersArray.map((elm, i) => {
      if (i === 0) p1.push(elm);
      else if (i === 1) p2.push(elm);
      else if (i === 2) p3.push(elm);
      else if (i === 3) p4.push(elm);
      else if (i === 4) p5.push(elm);
      else if (i === 5) p6.push(elm);
    });
    const powers = {
      p1: p1.join(""),
      p2: p2.join(""),
      p3: p3.join(""),
      p4: p4.join(""),
      p5: p5.join(""),
      p6: p6.join(""),
    };
    return powers;
  }

  return power;
};

export default SerializePowers;
