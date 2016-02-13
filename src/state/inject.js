import tree from './tree';

const inject = ( branch, context, alias ) => {
    const currentBranch = tree.select(branch);

    context[alias || branch] = currentBranch.get();

    currentBranch.on( 'update', () => {
        context[branch] = currentBranch.get();

        if (NODE_ENV === 'development')
            console.log( 'State:', branch , ' was rebinded' );
    });

    return () => currentBranch.off( branch );
};

export default inject;
