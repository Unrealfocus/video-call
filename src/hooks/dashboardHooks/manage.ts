const copyToClipBoard = (input: string) => {
  navigator.clipboard.writeText(input);
  alert("link copied");
};

export default copyToClipBoard;
