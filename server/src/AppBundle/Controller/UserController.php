<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * @Route("user")
     * @Method({"GET", "OPTIONS"})
     */
    public function getUsersAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository('AppBundle:User')->findAll();
        $usersList = [];
        foreach ($users as $user) {
            $usersList[] = $user->toArray();
        }

        return new Response(json_encode($usersList));
    }

    /**
     * @Route("user")
     * @Method({"POST", "OPTIONS"})
     */
    public function addUserAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $em = $this->getDoctrine()->getManager();
        $user = new User();
        $user->setFirstname($request->request->get('firstname'));
        $user->setLastname($request->request->get('lastname'));
        $user->setEmail($request->request->get('email'));
        $em->persist($user);
        $em->flush();

        return new Response(json_encode($user->toArray()));
    }
}
