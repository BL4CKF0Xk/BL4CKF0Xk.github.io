import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './blogpost.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useNavigate} from 'react-router-dom';


import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';

const Bash = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div className='containerblog'>
        <Navbar />
        <button onClick={goBack} style={{background:'none',border:'none',padding:'0',outline:'inherit',cursor:'pointer',color:'inherit'}}>
            <IoIosArrowBack className='iconblo' style={{color:"#fff"}}/>
        </button>
        
        <div className='headingblog'>
            <h1>Bash Shell</h1>
        </div>
        <div className='headingdet'>
            <h6>23/9/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h1 className='headingblog'>Bourne Again Shell</h1>
            <p className='subheaddes'>Some of the shells that Bash has borrowed concepts from the Bourne Shell (sh), The Korn Shell (ksh) and the C-shell (csh and it's successor, tcsh).</p>
            <h2 className='subheading'># Key Points </h2>
            <p className='subheaddes'>Shell Syntax</p>
            <p className='subheaddes'>Shell Commands</p>

        <div className='section'>
            <h1 className='subheading'>Shell Syntax</h1>
            <p className='subheaddes'>The shell reads its input and divides the input into words and operators, employing the quoting rules to select which meanings to assign varios words and characters</p>
            
        <h2 className='subheading'># Shell Operations</h2>.
                <h4>- Reads input from a file / supplied as an argument to the "-C" invocation option / from the user's terminal</h4>
                <h4>- Breaks the input into words and operators</h4>
                <h4>- parses the token into simple and compound commands</h4>
                <h4>- Breaking the expanded token into lists of filenames and commands and arguments</h4>
                <h4>- Perform any necessary redirections</h4>
                <h4>- Execute the command</h4>
                <h4>- Wait for the command to complete and exit status</h4>
                
        <h2 className='subheading'># Quoting</h2>
            <p className='subheaddes'> Each of the shell metacharacters [ A character that, when unquoted, separates words. A metacharacter is a `space`, `tab`, `newline`, or one of the following characters: ]
            <span><SyntaxHighlighter> 
            ‘|’, ‘&’, ‘;’, ‘(’, ‘)’, &apos;&lt;&apos;, or &apos;&gt;&apos; 
            </SyntaxHighlighter></span>
             has special meaning to the shell and must be quoted if it is to represent itself</p>

            <h2 className='subheading'># Comments</h2>
            <p className='subheaddes'> In a shell a word beginning with '#' causes that word and all remaining characters on that line to be ignored.</p>

        </div>
        <div className='section'>
            <h1 className='headingblog'>Shell Commands</h1>
            <h2 className='subheading'> # Reserved Words</h2>
            <p className='subheaddes'> - These are words that have special meaning to the shell. Following words are recognized as reserved when unquoted and the first word of a command</p>
            <p className='subheaddes'>
                <SyntaxHighlighter>
                - [ if | then | elif | else | fi | time | for | in | until | while | do | done | case | esac | coproc | select | function | &#123;  &#8739; &#125;  | [[ | ]] | ! ]
                </SyntaxHighlighter></p>
            <p className='subheaddes'>- **in** and **do** are recognized as reserved words if they are the third word in a **for** command</p>

            <h2 className='subheading'> # Simple Commands</h2>
            <p className='subheaddes'>First word generally specifies a command to be executed, with the rest of the words being that command arguments.</p>

            <h2 className='subheading'># Pipeines</h2>
            <SyntaxHighlighter>
            - [time [-p]] [!] command1 [ | or |& command2 ]
            </SyntaxHighlighter>
            <p className='subheaddes'>The output of each command in the pipeline is connected via a pipe to the input of the next command</p>
            <p className='subheaddes'>If '|&' is used command1's standard error is connected to command2's standard input</p>

            
        </div>
        <div className='section'>
            <h2 className='subheading'> # Lists Of Commands</h2>
            <p className='subheaddes'>- A list is a sequence of one or more pipelines seperated by one of the operators ';', '&', '&&'[AND], '||'[OR]</p>
            
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Bash