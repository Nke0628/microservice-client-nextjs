import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { graphql } from "../../../gql/gql";
import { useQuery } from "urql";

const ModalFetch: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryTest = graphql(/* GraphQL */ `
    query ModalFetchQuery($ids: [Float!]!) {
      fetchUsersByIds(ids: $ids) {
        id
        name
      }
    }
  `);
  const [{ data }] = useQuery({
    query: queryTest,
    variables: {
      ids: [1, 2],
    },
    pause: !isOpen,
  });

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{data?.fetchUsersByIds[1].name}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalFetch;
