import logo from './logo.svg';
import './App.css';
import { Button, Container,Form,Grid,Header,Icon,Segment,Statistic } from 'semantic-ui-react';
function App() {
  return (
   <Container>
    <Header as='h1'>Budget</Header>

    <Statistic size='tiny'>
      <Statistic.Label>Your Balance</Statistic.Label>
      <Statistic.Value>300k</Statistic.Value>
    </Statistic>


    <Segment textAlign='center'>
      <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Statistic size='tiny' color='green'>
            <Statistic.Label>Income</Statistic.Label>
            <Statistic.Value>80k</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
        <Statistic size='tiny' color='red'>
            <Statistic.Label>Expense</Statistic.Label>
            <Statistic.Value>30k</Statistic.Value>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Segment>


    <Header as='h2'>History</Header>

    <Segment textAlign='center' color='red'>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10}>A</Grid.Column>
          <Grid.Column width={3}>B</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit"/>
            <Icon name="trash"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Header as='h3'>Transaction</Header>
    <Form>
      <Form.Group>
        <Form.Input width={9} icon='tags' label="Description" placeholder="new testing" />
        <Form.Input width={3} icon='tags' label="Expense" placeholder="new testing" />
        <Button.Group size='tiny'>
          <Button>Cancel</Button>
          <Button.Or style={{marginTop: 15}}/>
          <Button primary>Save</Button>
        </Button.Group>
      </Form.Group>
      
    </Form>



   </Container>
  );
}

export default App;
