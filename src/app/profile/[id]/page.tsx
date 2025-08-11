export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Username: {params.id}</p>
    </div>
  );
}
