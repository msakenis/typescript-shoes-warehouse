import React from 'react';
import logoImg from '../../assets/images/talechLogo.png';
import { Link as ReactLink, useHistory } from 'react-router-dom';
import { Stack, Image, Link, Box } from '@chakra-ui/react';

function NavBar() {
  const history = useHistory();
  return (
    <Box borderBottom="2px" borderColor="gray.200">
      <Stack
        maxW="7xl"
        direction={['column', 'column', 'row']}
        justify={'space-between'}
        align="center"
        m="auto"
      >
        <Image
          src={logoImg}
          p="4"
          width="200px"
          alt="logo"
          cursor="pointer"
          onClick={() => history.push('/products')}
        />
        <Stack direction="row" p="4" color="gray.500">
          <Link
            as={ReactLink}
            mr={['4', '4', '2']}
            ml={['4', '4', '2']}
            fontSize={['xl', 'xl', 'lg']}
            to="/products"
          >
            Products
          </Link>
          <Link
            as={ReactLink}
            fontSize={['xl', 'xl', 'lg']}
            to="/products/create"
          >
            Create Product
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NavBar;
