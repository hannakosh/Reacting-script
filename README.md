# Google Meet reactions automatization script

# Usage
1. Copy provided class to the developers console opened on Google Meets meeting page.
2. Instantiate copied class:
   const autoReactions = new Reacting();
3. Use start reacting method to select desired reaction and time interval
   autoReactions.startReacting("💖", 4000);
4. Use stop reacting method to stop reactions
   autoReactions.stopReacting();
5. If you close reactions panel, reacting will be stopped automatically
