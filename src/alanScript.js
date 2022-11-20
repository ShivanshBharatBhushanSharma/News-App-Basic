intent ( '$(item* (.*))', (p) => {
    if(p.item.value === 'health' || p.item.value === 'Sports' || p.item.value === 'General' || p.item.value === 'business' || p.item.value === 'entertainment' || p.item.value === 'science' || p.item.value === 'technology') {
        p.play({ command: 'VoiceNews', data: p.item.value });
        p.play(`Fetching News on ${p.item.value} Category` );
    }
    else{
        p.play(`Cannot get Data`);
    }
}) 

intent('What does this app do?', 'What can I do here?', 
      reply('This is a news project.'),
);

intent(
    '(How|)  (can i use|to use) (it|) (this|) (application|app|news application|news app)',
    reply('Use dropdown men or by using the mic.'),
);

intent(
    'what to say',
    reply('Say by Category name like Health, Business, General, Sports and so on.'),    
);
               