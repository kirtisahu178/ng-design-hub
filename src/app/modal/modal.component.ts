import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDesignComponent } from "../card-design/card-design.component";
import { PageBreadcrumbsComponent } from '../page-breadcrumbs/page-breadcrumbs.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CardDesignComponent, PageBreadcrumbsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  htmlCode1 = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Basic modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rabbits modal</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">/button>
                </div>
                <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ok</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Basic modal with static backdrop
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Turtles modal</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Fact: Turtles can live for a very long time, with some species living over 100 years.
                    They have excellent navigational skills and can return to the same beach where they were
                    born to lay their eggs.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
  `;

  cssCode1 = `

  `;

  tsCode1 = ``;

  htmlCode2 = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal"
        data-bs-target="#scrollingLongContent">
        Scrolling long content
    </button>

    <!-- Scrollable modal -->
    <div class="modal fade" id="scrollingLongContent" tabindex="-1"
        aria-labelledby="scrollingLongContentModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="scrollingLongContentModalLabel">Lion modal</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Fact: Lions are the only big cats that live in social groups called prides. A pride
                    typically consists of related females, their cubs, and a few male lions. Male lions are
                    responsible for protecting the territory, while the females do most of the hunting.
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                    Lions are also known for their iconic roar, which can be heard from up to 5 miles (8
                    kilometers) away, helping them communicate and mark their territory.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ok</button>
                </div>
            </div>
        </div>
    </div>
  `;

  cssCode2 = `

  `;

  tsCode2 = ``;

  htmlCode3 = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal"
        data-bs-target="#verticallyCenteredModal">
        Vertically centered modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="verticallyCenteredModal" tabindex="-1"
        aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="verticallyCenteredModalLabel">Rabbits modal</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                    any angle. However, they have a blind spot right in front of their nose!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ok</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal"
                data-bs-target="#verticallyCenteredScrollableComtent">
                Vertically centered scrollable content
    </button>

    <!-- Scrollable modal -->
    <div class="modal fade" id="verticallyCenteredScrollableComtent" tabindex="-1"
                aria-labelledby="verticallyCenteredScrollableComtentModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="verticallyCenteredScrollableComtentModalLabel">Lion modal</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Fact: Lions are the only big cats that live in social groups called prides. A pride
                    typically consists of related females, their cubs, and a few male lions. Male lions are
                    responsible for protecting the territory, while the females do most of the hunting.
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                    Lions are also known for their iconic roar, which can be heard from up to 5 miles (8
                    kilometers) away, helping them communicate and mark their territory.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ok</button>
                </div>
            </div>
        </div>
    </div>
  `;

  cssCode3 = `

  `;

  tsCode3 = ``;

  htmlCode4 = `
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Dogs have a sense of smell that is 40 times more sensitive than humans. They can
                            detect diseases like cancer and diabetes just by sniffing!
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal">Open second modal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Cats can make over 100 different sounds, while dogs can only make about 10. Their
                            unique vocalizations help them communicate with humans and other cats.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first
                modal</button>
  `;

  cssCode4 = `

  `;

  tsCode4 = ``;

  htmlCode5 = `
    <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal"
                data-bs-target="#disabledBackdrop">
                Disabled backdrop modal
            </button>

            <!-- Disabled Backdrop Modal -->
            <div class="modal fade" id="disabledBackdrop" tabindex="-1" aria-labelledby="disabledBackdropLabel"
                aria-hidden="true" data-bs-backdrop="false">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="disabledBackdropLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal"
                data-bs-target="#disabledAnimation">
                Disabled animation modal
            </button>

            <!-- Disabled Animation Modal -->
            <div class="modal" id="disabledAnimation" tabindex="-1" aria-labelledby="disabledAnimationLabel"
                aria-hidden="true" data-bs-backdrop="false">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="disabledAnimationLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
  `;

  cssCode5 = `

  `;

  tsCode5 = ``;

  htmlCode6 = `
    <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#smallModal">
                Small modal
            </button>

            <!-- Small Modal -->
            <div class="modal fade" id="smallModal" tabindex="-1" aria-labelledby="smallModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="smallModalLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#largeModal">
                Large modal
            </button>

            <!-- Large Modal -->
            <div class="modal fade" id="largeModal" tabindex="-1" aria-labelledby="largeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="largeModalLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#extraLargeModal">
                Extra large modal
            </button>

            <!-- Extra large Modal -->
            <div class="modal fade" id="extraLargeModal" tabindex="-1" aria-labelledby="extraLargeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="extraLargeModalLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#fullScreenmodal">
                Full screen modal
            </button>

            <!-- Full screen Modal -->
            <div class="modal fade" id="fullScreenmodal" tabindex="-1" aria-labelledby="fullScreenmodalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="fullScreenmodalLabel">Rabbits modal</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Fact: Rabbits have nearly 360-degree vision, allowing them to spot predators from almost
                            any angle. However, they have a blind spot right in front of their nose!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
  `;

  cssCode6 = `

  `;

  tsCode6 = ``;
  
}
