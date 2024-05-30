class Reacting {
    intervalId = null;
    
    startReacting(emoji, delay) {
        this.validate(emoji, delay);
        if (document.querySelector(`[role=button] [aria-label="${emoji}"]`) === null) {
            document.querySelector('[role=button][aria-label="Send a reaction"]').click();
        }
        this.intervalId = setInterval(
            () => {
                if (document.querySelector(`[role=button] [aria-label="${emoji}"]`) === null) {
                    this.stopReacting();
                }
                document.querySelector(`[role=button] [aria-label="${emoji}"]`).click();
            },
            delay
        );
    }

    stopReacting() {
        clearInterval(this.intervalId);
        console.log('stopped');
    }

    validate(emoji, delay) {
        const available = ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'];
        if (!available.includes(emoji)) {
            throw new Error(`Entry ${emoji} is not valid. Valid options are ${available.join(', ')}`);
        }
        if (delay < 1000 || delay > 60000) {
            throw new Error(`Delay ${delay} is not valid. Valid values are 1 - 60 seconds.`);
        }
    }
}