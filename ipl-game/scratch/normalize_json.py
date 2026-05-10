import json
import os

file_path = '/Users/jatin/Documents/iplteams/ipl-game/src/data/players.json'

with open(file_path, 'r') as f:
    data = json.load(f)

for player in data:
    updated_teams = {}
    for team_info in player.get('teams', []):
        team_name = team_info['team']
        if team_name == "Rising Pune Supergiants":
            team_name = "Rising Pune Supergiant"
        
        if team_name in updated_teams:
            # Merge years
            updated_teams[team_name].extend(team_info['years'])
            # Sort and unique years
            updated_teams[team_name] = sorted(list(set(updated_teams[team_name])))
        else:
            updated_teams[team_name] = team_info['years']
    
    player['teams'] = [{"team": k, "years": v} for k, v in updated_teams.items()]
    player['teamCount'] = len(player['teams'])

with open(file_path, 'w') as f:
    json.dump(data, f, indent=4)

print("Successfully updated players.json")
