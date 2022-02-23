function Links (props) {
    return (
      <ul id={props.id} className={props.className}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Our Works</a>
        </li>
        <li>
          <a href="">Clients</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    );
}

export default Links;