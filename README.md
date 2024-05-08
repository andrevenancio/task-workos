# Task WorkOS

This repository is a take-home exercise for WorkOS build with nextjs and css modules.

## Components

In production I would normally use components from a design system. Either from `npm` or internally from a monorepo (I like to use turborepo). When I am building a design system I normally use atomic design. However, because this is a simple take-home exercise I decided to put all components flat instead of organised in atoms, molecules, organisms, etc. Components should not have application specific logic so we can re-use them as much as possible.

In this repository, I've created a couple of components, A particularly interesting component is the Tabs `src/components/tabs` where you can see how we can easily expand to new tabs by simply passing in more data.

## Containers

Containers are also components, however when there is application specific logic I've decided to separate some components into the containers folder.

## Caveats

In this example, I make use of a `Box` component to compose layouts quickly. This helps me develop faster, but also keeping this repository simple without too many components. In production I would try to avoid it.

## Accessibility

In this exercise I use radix-ui as much as possible so I can inherit some accessibility best practices for free.

## State Management

I could use React Context for this example, which would be enough, but I like using Redux, so I've added redux toolkit to the repository.

At the moment the user needs to open the `Members` tab in order to load the list of members which is necessary for the second tab `Groups`. if we were to link the members/groups to the URL and the user were to access the groups first, this flow would not work. In that case, I would probably add redux-saga and load the members api endpoint as part of my initial data. This way regardless of which page loads first, my `members` array would already be populated.
