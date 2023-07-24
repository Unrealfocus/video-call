import axios from "axios";

type updateBucketParams = {
  user_id: string;
  token: string;
  bucket_id: string;
  title: string;
  description: string;
  link: string;
};

const copyToClipBoard = (input: string) => {
  navigator.clipboard.writeText(input);
  alert("Bucket link copied to clipboard. \n" + input);
};

const updateBucket = async (params: updateBucketParams) => {
  //call axios
  axios.defaults.headers.common["Authorization"] = "Bearer " + params.token;
  await axios
    .post(params.link, {
      user_id: params.user_id,
      title: params.title,
      description: params.description,
      bucket_id: params.bucket_id,
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      alert(err);
      // return err.message;
    });
};

const getSingleBucket = () => {};

export { copyToClipBoard, updateBucket };
