// react libraries
import React from 'react';

// third-party libraries
import {Grid, Image, Header, List} from 'semantic-ui-react';

// scss
import './DashboardPage.scss';

class DashboardPage extends React.Component {

  render() {
    return (
      <div className="dashboard-container">
        <Grid centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h1' className="dashboard-header">Getting Started</Header>
          </Grid.Column>
        </Grid>

        <Grid centered>
          <Grid.Column mobile={16} tablet={8}>
            <Image className="dashboard-image"
                   src='https://res.cloudinary.com/do8ik6qe5/image/upload/v1561551408/david-travis-5bYxXawHOQg-unsplash.jpg'/>
          </Grid.Column>
        </Grid>

        <Grid centered columns={4}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h1' className="dashboard-header">
              Want some tips for taking better notes?
              <Header.Content>
                <Header.Subheader>Check out these articles:</Header.Subheader>
              </Header.Content>
            </Header>
            <List>
              <List.Item as='a' href="https://evernote.com/blog/make-yourself-note-able/">
                Make Yourself Note-able
              </List.Item>
              <List.Item as='a' href="https://evernote.com/blog/bullet-points-for-concise-note-taking/">
                The Beauty of Bullet Points
              </List.Item>
              <List.Item as='a' href="https://evernote.com/blog/make-yourself-note-able/">
                6 Ways Students Can Use Evernote
              </List.Item>
            </List>

          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h1' className="dashboard-header">
              Start To Organize Your Life Today
              <Header.Content>
                <Header.Subheader>Check out these shortcuts:</Header.Subheader>
              </Header.Content>
            </Header>
            <List>
              <List.Item as='a' href="/notebooks/1/notes/new">
                Add a New Note
              </List.Item>
              <List.Item as='a' href="/notes">
                View All Your Notes
              </List.Item>
              <List.Item as='a' href="/notebooks">
                Access Your Notes by Category
              </List.Item>
            </List>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default DashboardPage;
