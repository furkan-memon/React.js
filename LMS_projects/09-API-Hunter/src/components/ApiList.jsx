import ApiCard from "./ApiCard";

export default function ApiList({ apis }) {
  return (
    <div>
      {apis.map((api, i) => (
        <ApiCard key={i} api={api} />
      ))}
    </div>
  );
}