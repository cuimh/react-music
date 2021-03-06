import React from 'react'
import {withRouter} from 'react-router-dom'

import {formatPlayCount} from 'common/util'

import './playlist.scss'

// 歌单基础列表组件

const BasePlayList = (props) => {
  const {list, history} = props;
  return (
    <div className="playlist-wrapper">
      {
        list.length > 0 && list.map(item => (
          <div className="playlist-item" onClick={() => {
            history.push({pathname: `/playlist/${item.id}`})
          }} key={item.id}>
            <div className="playlist-item-hd">
              <img src={`${item.coverImgUrl}?param=70y70`} alt=""/>
            </div>
            <div className="playlist-item-bd">
              <h2>{item.name}</h2>
              <p>{item.trackCount}首&nbsp;by {item.nickname}，&nbsp;播放{formatPlayCount(item.playCount)}次</p>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default withRouter(BasePlayList)
