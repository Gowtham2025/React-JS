import React from "react";
import Menu from './menu';
import './socialbutton.css';

export default function Socialbutton() {
    return (
        <div>
            <Menu/>
            <div class="sbbg">
            <div class="sbal">
            <div class="sbt1">Social Button</div>
            <div>
                <button class="sbb1">Like</button>
                <button class="sbb2">Comment</button>
                <button class="sbb3">Share</button>
            </div>
            </div>
            </div>
        </div>
    );

}