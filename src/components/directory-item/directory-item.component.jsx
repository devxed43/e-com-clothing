// Navigate Import
import { useNavigate } from "react-router-dom";

// Styles
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

// Component
const DirectoryItem = ({ category }) => {
  // Directory Item Component recieves Category [] from parent Directory Component.
  // Destructures off imageUrl, title, route
  const { imageUrl, title, route } = category;

  // Navigate
  const navigate = useNavigate();

  // Event Handler
  const onNavigateHandler = () => navigate(route);

  return (
    // Directory Item Container holds Background Image, the title, and shop now in the card
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
