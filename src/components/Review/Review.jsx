import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Input, Button } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const Review = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
  
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };
  
    const actions = [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    const { TextArea } = Input;
    return (
        <div style={{padding:"50px 200px 50px 200px"}}>
            <Comment
      actions={actions}
      author={<a>Jim Kerry</a>}
      avatar={<Avatar src="data:image/jpeg;base64,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" alt="Han Solo" />}
      content={
        <p>
          It may look like your average neighborhood pizza joint, but Acme Pizza is anything but!
I wandered in with two friends on a Friday night, and was immediately greeted by the friendly staff and incredible aroma of baking pizza. The restaurant was filling up quickly (it was almost 7:00 pm) but we managed to snag a table.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
         />
         <Comment
      actions={actions}
      author={<a>Joanna Cutrara
        </a>}
      avatar={<Avatar src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/07/4505326f-c1db-40f2-8430-969a48cb05c7-124x124.jpg" alt="Han Solo" />}
      content={
        <p>
         We ordered the garlic knots and two medium pies to share: the XX (pesto, artichoke, red onion, bacon, feta, mozzarella) and the XY (marinara, pepperoni, Italian sausage, mozzarella).
The garlic knots were little bombs of buttery, yeasty goodness, and the garlic was robust but not overpowering. When our pizzas arrived, our expectations continued to be exceeded.

The crust was crisp, flavorful, and chewy. The toppings worked together beautifully. The marinara and pesto were packed with flavor, and the mozarella had a great consistency and very little oil. By the end of the meal we were planning our next visit.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
         />

         <div className="new-comment" style={{marginTop:"50px"}}>
             <div style={{display:"flex", width:"80%"}}>
             <Avatar style={{marginRight:"15px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kendall-jenner-attends-the-tiffany-co-flagship-store-launch-news-photo-1596195763.jpg" alt="Han Solo" />
             <p>Kendall Jenner</p>
             </div>
             <TextArea style={{  marginLeft:"45px", width:"60%"}} rows={4} />
             <br />
             <Button style={{width:"25%", marginTop:"20px", marginLeft:"45px"}} type="primary" block> Add comment</Button>
         </div>
         

        </div>
    );
};

export default Review;