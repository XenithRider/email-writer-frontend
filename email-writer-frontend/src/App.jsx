import Container from '@mui/material/Container';
import { useState } from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelSubmit = async() =>{

    setLoading(true);
    setError('');
    try {
      
      
    } catch (error) {
      setError('failed to generate email reply. Please try again')
      console.error(error)
    }finally {
      setLoading(false)
    }

  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Writer AI
      </Typography>
      <Box sx={{mx: 3 }}>
      <TextField fullWidth multiline rows={6} variant='outlined' label="Orignal Email Content" value={emailContent || '' }
      onChange={(e)=>setEmailContent(e.target.value)}
      sx ={{mb:2}}
      />

      <FormControl fullWidth sx={{mb:2}}>
        <InputLabel>Tone (Optional)</InputLabel>
        <Select value={tone ||'' } label={'Tone (Optional)'}
        onChange={(e)=> setTone(e.target.value)}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value='professional'>Professional</MenuItem>
          <MenuItem value='casual'>Casual</MenuItem>
          <MenuItem value='friendly'>Friendly</MenuItem>
        </Select>
      </FormControl>
      <Button variant=' contained' onClick={handelSubmit} disabled={ !emailContent || loading} fullWidth>
        {loading ? <CircularProgress size={24} />  : " Generate reply"}
      </Button>

      </Box>

      {error && (
              <Typography color='error' sx={{mb:2}}>
              {error}
            </Typography>
      )}

      {generatedReply && (
        <Box sx={{mt:3}}>
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField fullWidth multiline rows={6} variant='outlined' value={generatedReply || ''} InputProps={{readOnly:true}} />

          <Button variant='outlined' sx={{mt:2}} onClick={()=> navigator.clipboard.writeText(generatedReply)}>
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;