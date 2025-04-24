import Link from "next/link";
import React from 'react';

export default function SecondLevelDropdownItem({ navItemText, path }) {
	return (
		<li className="sub-menu--item">
			<Link href={path}>{navItemText}</Link>
		</li>
	);
}
