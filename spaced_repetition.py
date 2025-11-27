"""
Spaced Repetition Algorithm - SM-2 Implementation
Based on SuperMemo 2 algorithm
"""

from datetime import datetime, timedelta

class SpacedRepetition:
    """SM-2 spaced repetition algorithm"""
    
    # Rating values
    AGAIN = 0  # Complete blackout, incorrect recall
    HARD = 1   # Incorrect response, correct one seemed easy to recall
    GOOD = 2   # Correct response, with hesitation
    EASY = 3   # Perfect response
    
    def __init__(self):
        self.min_ease = 1.3
        self.initial_ease = 2.5
    
    def calculate_next_review(self, rating, ease_factor, interval, reviews_count):
        """
        Calculate the next review date and updated ease factor
        
        Args:
            rating: 0-3 (AGAIN, HARD, GOOD, EASY)
            ease_factor: Current ease factor (default 2.5)
            interval: Current interval in days
            reviews_count: Number of times reviewed
        
        Returns:
            tuple: (new_ease_factor, new_interval_days, next_review_date)
        """
        
        # Update ease factor based on rating
        new_ease = ease_factor
        
        if rating == self.AGAIN:
            # Failed recall - reset interval
            new_interval = 1
            new_ease = max(self.min_ease, ease_factor - 0.2)
            
        elif rating == self.HARD:
            # Difficult recall - short interval
            new_interval = max(1, int(interval * 1.2))
            new_ease = max(self.min_ease, ease_factor - 0.15)
            
        elif rating == self.GOOD:
            # Successful recall
            if reviews_count == 0:
                new_interval = 1
            elif reviews_count == 1:
                new_interval = 6
            else:
                new_interval = int(interval * ease_factor)
            new_ease = ease_factor
            
        elif rating == self.EASY:
            # Easy recall - longer interval
            if reviews_count == 0:
                new_interval = 4
            elif reviews_count == 1:
                new_interval = 10
            else:
                new_interval = int(interval * ease_factor * 1.3)
            new_ease = ease_factor + 0.15
        
        else:
            raise ValueError(f"Invalid rating: {rating}. Must be 0-3.")
        
        # Calculate next review date
        next_review = datetime.now() + timedelta(days=new_interval)
        
        return new_ease, new_interval, next_review
    
    def get_rating_description(self, rating):
        """Get human-readable description of rating"""
        descriptions = {
            self.AGAIN: "Again - Complete blackout",
            self.HARD: "Hard - Difficult recall",
            self.GOOD: "Good - Correct with hesitation",
            self.EASY: "Easy - Perfect recall"
        }
        return descriptions.get(rating, "Unknown")
