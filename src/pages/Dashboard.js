// import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../features/Users";
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogTitle, Grid, Typography } from "@mui/material";

function Dashboard() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [age, setUserAge] = useState("");
  const [location, setLocation] = useState('')
  const [information, setInformation] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClean = () => {
    setName("")
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <div>
        <Button sx={{ backgroundColor: '#1976d2de', color: 'white', marginTop: '1rem', " :hover": { backgroundColor: '#1976d2de' } }} onClick={handleClickOpen}>Add Post</Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Name: </label>
            <input
              type="text"
              placeholder="Name..."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </DialogTitle>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Age: </label>
            <input
              type="text"
              placeholder="Age..."
              onChange={(event) => {
                setUserAge(event.target.value);
              }}
            />
          </DialogTitle>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Location: </label>
            <input type="text" placeholder="Address..." onChange={(event) => {
              setLocation(event.target.value);
            }} />
          </DialogTitle>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>Messages: </label>
            <textarea onChange={(event) => {
              setInformation(event.target.value)
            }}></textarea>
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => {
              handleClose()
              handleClean()
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  age,
                  location,
                  information
                })
              )
            }}>Add Post</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="displayUsers" >
        <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {userList.map((user, index) => {
              return (

                <Grid item xs={2} sm={4} md={4} key={index} spacing={10} >

                  {/* <Item>xs=2</Item> */}

                  <Card sx={{ minWidth: 275, backgroundColor: '#e5ecf4', boxShadow: 'none' }}>
                    <CardContent >
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: {user.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Age: {user.age}
                      </Typography>
                      <Typography sx={{ mb: 1 }} color="text.secondary">
                        Location: {user.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description: {user.information}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                      }} size="small">Delete Post</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div >
  );
}

export default Dashboard;
