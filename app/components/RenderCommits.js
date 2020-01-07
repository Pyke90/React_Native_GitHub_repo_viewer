import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

export const RenderCommits = (props) => {
    
    return (
      
            <ScrollView>
            {
              props.commits.map((commit, i) => {
                return (
                  <ListItem
                    key={i} 
                    leftAvatar={{ source: {uri:commit.author.avatar_url}}}
                    subtitle={ 
                    <View>
                    
                    <Text> Author: {JSON.stringify(commit.commit.author.name)}</Text>
                    <Text> Summary: {JSON.stringify(commit.commit.message)}</Text>
                    <Text> Date: {JSON.stringify(commit.commit.committer.date)}</Text>
                    
                    </View>                    
                    }
                  />
                )
              })
            }
            </ScrollView>
            )
 }
