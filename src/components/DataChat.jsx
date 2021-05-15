import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Peer from 'peerjs';
let peer = null;

const debut = (myid, hesid) => {
  peer = new Peer(myid, {
    host: 'localhost',
    port: 3000,
    path: '/mypeer',
  });

  peer.connect(hesid);

  peer.on('connection', (conn) => {
    conn.on('Message', (msg) => {
      console.log('message', msg);
    });
  });
};

const envoie = (msg) => {
  peer.on('connection', (conn) => {
    conn.send(msg);
  });
  console.log(msg);
};

function DataChat() {
  const classes = useStyles();

  const [startAvailable, setStart] = useState(true);
  const [sendAvailable, setSend] = useState(false);
  const [hangupAvailable, setHangup] = useState(false);

  const [myid, setmyid] = useState(null);
  const [myid, sethesid] = useState(null);
  const [msg, setmsg] = useState(null);

  const start = () => {
    setStart(false);
    setSend(true);
    setHangup(true);
    debut(myid, hesid);
  };

  const hangup = () => {
    setStart(true);
    setSend(false);
    setHangup(false);
  };

  const send = () => {
    envoie(msg);
  };

  return (
    <div>
      <h1>YassineAMG</h1>
      <TextField
        label="Identifiant"
        onChange={(e) => setmonid(e.target.value)}
        disabled={!startAvailable}
      />
      <br />
      <TextField
        label="Destinataire"
        onChange={(e) => setsonid(e.target.value)}
        disabled={!startAvailable}
      />
      <br />
      <Button
        onClick={start}
        disabled={!startAvailable}
      >
        Démarrer
      </Button>
      <br />
      <TextField
        label="Message"
        onChange={(e) => setmsg(e.target.value)}
        disabled={!sendAvailable}
      />
      <br />
      <Button
        onClick={send}
        color="primary"
        disabled={!sendAvailable}
      >
        Envoyer
      </Button>
      <br />
      <h2>Mesasges</h2>
      <br />
      <Button
        onClick={hangup}
        color="secondary"
        disabled={!hangupAvailable}
      >
        Hang Up
      </Button>
    </div>
  );
}

export default DataChat;
