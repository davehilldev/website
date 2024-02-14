import { FaGithub, FaLinkedin, FaMastodon, FaXTwitter } from "react-icons/fa6";
import { BlueskyIcon } from "@/components/BlueskyIcon";

export default function Socials() {
    return (
        <ul class="social">
            <li><a href="https://twitter.com/_davehilldev" target="_blank" rel="noopener" class="twitter"><FaXTwitter /><span className="visually-hidden">Twitter</span></a></li>
            <li><a href="https://mastodon.social/@isdavehill" target="_blank" rel="noopener" class="mastodon"><FaMastodon /><span className="visually-hidden">Mastodon</span></a></li>
            <li><a href="https://github.com/davehilldev" target="_blank" rel="noopener" class="github"><FaGithub /><span className="visually-hidden">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/isdavehill/" target="_blank" rel="noopener" class="linkedin"><FaLinkedin /><span className="visually-hidden">LinkedIn</span></a></li>
            <li><a href="https://bsky.app/profile/davehilldev.bsky.social"target="_blank" rel="noopener" class="bluesky"><BlueskyIcon /><span className="visually-hidden">Bluesky</span></a></li>
        </ul>
    );
}

