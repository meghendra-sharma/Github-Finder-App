import React from 'react'
import {BiLink} from 'react-icons/bi'
import {AiFillEye , AiFillStar} from 'react-icons/ai'
import {CgGitFork} from 'react-icons/cg'
import {RiBookOpenFill} from 'react-icons/ri'
import userEvent from '@testing-library/user-event'

function RepoItem({repo}) {
  return (
    <div className='container  bg-dark opacity-75 rounded py-2'>
      <a className='text-decoration-none text-white fw-bold ' href= {repo.html_url} target = "_blank" rel = 'noopener noreferrer'>
        <BiLink/> {repo.name}
      </a>
      <p>{repo.description ? repo.description : "This repo does not has description"}</p>
      <div className=''>
        <span className='badge text-bg-primary mx-2'> <AiFillEye/> {repo.watchers_count} </span>
        <span className='badge text-bg-success mx-2 '> <AiFillStar/> {repo.stargazers_count} </span>
        <span className='badge text-bg-danger mx-2 '> <RiBookOpenFill/> {repo.open_issues_count} </span>
        <span className='badge text-bg-warning mx-2'> <CgGitFork/> {repo.forks_count} </span>
      </div>
    </div>
  )
}

export default RepoItem
