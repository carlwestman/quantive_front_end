import { useState } from 'react';
import { Sheet, List, ListItem, Typography, Divider, Button, Box, IconButton } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

// Mock data for research projects
const mockProjects = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Research Project ${i + 1}`,
  companies: i % 3 === 0 ? ['Company A', 'Company B'] : ['Company C'],
}));

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);
  const [tab, setTab] = useState<'chats' | 'reports' | 'sources'>('chats');

  const latestProjects = mockProjects.slice(0, 10);
  const hasMore = mockProjects.length > 10;

  return (
    <Box sx={{ position: 'fixed', left: 0, top: 0, bottom: 0, height: '100dvh', width: '100vw', display: 'flex', bgcolor: 'background.body' }}>
      {/* Left Menu */}
      <Sheet
        variant="soft"
        sx={{
          position: 'relative',
          left: 0,
          top: 0,
          height: '100dvh',
          width: menuOpen ? 260 : 56,
          transition: 'width 0.2s',
          overflow: 'hidden',
          boxShadow: 'sm',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
          <IconButton onClick={() => setMenuOpen((o) => !o)}>
            <MenuIcon />
          </IconButton>
          {menuOpen && <Typography level="h4" sx={{ ml: 1 }}>Quantive</Typography>}
        </Box>
        <Divider />
        <List>
          {latestProjects.map((proj) => (
            <ListItem
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              sx={{ cursor: 'pointer' }}
              variant={selectedProject.id === proj.id ? 'soft' : 'plain'}
              color={selectedProject.id === proj.id ? 'primary' : undefined}
            >
              {menuOpen ? proj.name : proj.name[0]}
            </ListItem>
          ))}
          {hasMore && menuOpen && (
            <ListItem sx={{ color: 'primary.500', cursor: 'pointer' }} onClick={() => alert('Show all projects (to implement)')}>Show all...</ListItem>
          )}
        </List>
      </Sheet>
      {/* Main Content */}
      <Box sx={{ flex: 1, p: 6, overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
        <Typography level="h2">{selectedProject.name}</Typography>
        <Typography level="body-sm" sx={{ mb: 2 }}>
          Connected Companies: {selectedProject.companies.join(', ')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant={tab === 'chats' ? 'solid' : 'soft'} onClick={() => setTab('chats')}>Chats</Button>
          <Button variant={tab === 'reports' ? 'solid' : 'soft'} onClick={() => setTab('reports')}>Reports</Button>
          <Button variant={tab === 'sources' ? 'solid' : 'soft'} onClick={() => setTab('sources')}>Sources</Button>
        </Box>
        <Divider />
        {/* Tab Content */}
        {tab === 'chats' && (
          <Box>
            <Button sx={{ mb: 2 }} onClick={() => alert('Start new chat (to implement)')}>Start New Chat</Button>
            <Typography>Chats for this project will appear here.</Typography>
          </Box>
        )}
        {tab === 'reports' && (
          <Box>
            <Typography>Reports for this project will appear here.</Typography>
          </Box>
        )}
        {tab === 'sources' && (
          <Box>
            <Typography>Sources (uploaded files) for this project will appear here.</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
