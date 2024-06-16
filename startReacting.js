class Reacting {
    intervalId = null;
    
    startReacting(emoji, delay) {
        this.validate(emoji, delay);
        if (document.querySelector(`[role=button] [aria-label="${emoji}"]`) === null) {
            const result = document.evaluate(
                "//i[contains(text(),'mood')]",
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE
            );
            result.singleNodeValue.click();
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

const autoReactions = new Reacting();
autoReactions.startReacting("💖", 1000);
//....
autoReactions.stopReacting();