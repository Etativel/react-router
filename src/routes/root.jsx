import { Outlet, useParams } from "react-router-dom";

export default function Root() {
  const { contactId } = useParams();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
            <li>
              <a href={`/contacts/3`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {contactId === "1" ? (
          <Outlet />
        ) : (
          <div className="hello">Contact {contactId}</div>
        )}
      </div>
    </>
  );
}
