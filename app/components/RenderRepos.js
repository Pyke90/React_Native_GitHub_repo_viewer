import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text, ListItem } from 'react-native-elements';

export const RenderRepos = (props) => {
    
    return (
        
        <ScrollView>
          
            {
              props.repos.map((repo, i) => {
                const repoName = (repo.name)
                const user = (repo.owner.login)
        
                return(
                    
                  <ListItem
                    key={i}         
                    subtitle={
                    <View>

                        <Text>Repo Owner: {user}</Text>
                        <Text>Project Name: {JSON.stringify(repo.name)}</Text>

                        <Button onPress={() => {props.reduxFetchCommitsRequest (user, repoName) 
                                                 .then(props.navigation.navigate('RepoCommits') )}}
                        title='To Repo Commits =>'/>
                    
                    </View>                    
                    }
                  />
                )
                })
            }
            
        </ScrollView>
        )
}