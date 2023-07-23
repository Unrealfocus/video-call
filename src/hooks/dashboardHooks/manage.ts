const copyToClipBoard = (input: string) => {
  navigator.clipboard.writeText(input);
  alert("Bucket link copied to clipboard. \n" + input);
};

export default copyToClipBoard;
