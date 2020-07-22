process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let str;

  while ((str = process.stdin.read()) !== null) {
    const reverseStr = str.split('').reverse().join('')

    process.stdout.write(reverseStr);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('结束');
});