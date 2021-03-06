// react library
import React from 'react';

// third-party libraries
import {Link} from 'react-router-dom';
import {Card} from 'semantic-ui-react'

// scss
import './PageNotFound.scss';

const PageNotFound = () => (
  <Card>
    <Card.Content>
      <Card.Header> 404 </Card.Header>
      <Card.Meta>
        <span>Oops! the requested page cannot be found, that's all we know!</span>
      </Card.Meta>
      <Card.Description>
        Please continue to the <Link to="/" replace>Home page</Link>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default PageNotFound;
