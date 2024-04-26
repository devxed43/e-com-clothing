import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h1>{title}</h1>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
