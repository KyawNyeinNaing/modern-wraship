import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  console.log(router.query.id);

  return(
    <div>{`Detail - ${router.query.id}`}</div>
  )
};

export default Detail;
